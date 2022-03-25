<script context="module">
  export const load = async ({fetch}) => {
    const res = await fetch("api")
    // const res = await fetch("api/something.json")
    const data = res.status === 200 ? await res.json() : "status : "+ res.status
    console.log(data)

    return {
      props: {
        data,
      }
    }
  }
</script>
<script>
// @ts-nocheck
  const title = "Index"
  export let data
</script>

<h1>{title}</h1>

{JSON.stringify(data)}
<svelte:head>
  <title>{title}</title>
</svelte:head>