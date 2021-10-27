<script>
	import { onMount } from "svelte";

	let fileName, description;
	let data;

	onMount(async () => {
		await simpleFetch();
	});

	async function simpleFetch() {
		const response = await fetch("/api/uploads");
		data = await response.json();
	}

	function submitUpload() {
		let formData = new FormData();

		formData.append("fileName", fileName.files[0]);
		formData.append("description", description);

		fetch("/api/uploads", {
			method: "POST",
			body: formData,
		})
			.then((result) => {
				simpleFetch();
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
	}

	function deleteUpload(fileName) {
		fetch("/api/uploads/delete/" + fileName, {
			method: "DELETE",
		})
			.then((response) => {
				simpleFetch();
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
	}
</script>

<main>
	<h1>Upload Something!</h1>
	<h2>Lets you upload some files - thats it, nothing more, nothing less.</h2>

	<input type="file" name="fileName" bind:this={fileName} />
	<input
		type="text"
		name="description"
		placeholder="description"
		bind:value={description}
	/>
	<button on:click={submitUpload}>Upload</button>

	<table class="meta-data">
		<thead>
			<th>Filename</th>
			<th>Description</th>
			<th>Size (in Byte)</th>
			<th>Mimetype</th>
			<th>Upload date</th>
			<th>Download</th>
			<th>Delete</th>
		</thead>
		{#if data}
			{#each data as meta}
				<tr>
					<td>{meta.fileName}</td>
					<td>{meta.description}</td>
					<td>{meta.fileSize}</td>
					<td>{meta.mimeType}</td>
					<td>{meta.createdAt}</td>
					<td>
						<a href="/api/uploads/{meta.fileName}" download={meta.fileName}>
							<button type="button"> Download </button>
						</a>
					</td><td>
						<button on:click={() => deleteUpload(meta.fileName)}>
							Delete
						</button>
					</td>
				</tr>
			{/each}
		{/if}
	</table>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(body) {
		background-color: #f2eee2;
		transition: background-color 0.3s;
	}

	h1 {
		color: fuchsia;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
		font-style: italic;
		margin-bottom: 0.2em;
	}

	h2 {
		color: #0add08;
	}

	button {
		margin-left: 0.5em;
	}

	table {
		border-collapse: collapse;
	}

	td,
	th {
		border: none;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: lightgray;
	}

	.meta-data {
		margin: auto;
		padding-top: 25px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
