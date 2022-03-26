<script context="module">
  export const load = async ({fetch}) => {
    const res = await fetch("api")
    // const res = await fetch("api/something.json")
    const data = res.status === 200 ? await res.json() : "status : "+ res.status
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

<style lang="scss">
  .box {
    background-color: black;
    .title {
      color: green;
    }
  }
</style>

<div class="box">
  <h1 class="title">{title}</h1>

</div>

{JSON.stringify(data)}
<svelte:head>
  <title>{title}</title>
</svelte:head>

