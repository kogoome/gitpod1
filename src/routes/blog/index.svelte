<script context="module">
  // @ts-ignore
  export const load = async ({fetch}) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return {
      props: {
        posts
      }
    }
  }
</script>

<script>
// @ts-nocheck
  export let posts
  const title = "Blog"
  let pageSize = 4
  let currentPage = 1
  let totalPages
  let searchTerm = ""
  let pagitems = []

  const paginatedItems = (searchedPosts, pageSize, currentPage) => {
    return searchedPosts.slice(
      (currentPage - 1) * pageSize,
      (currentPage - 1) * pageSize + pageSize
    )
  }
  const nextPage = () => {
    if (currentPage < totalPages) { currentPage++ }
  }
  const beforePage = () => {
    if (currentPage > 1) { currentPage-- }
  }
  
  $: searchedPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  $: totalPages = Math.ceil(searchedPosts.length/pageSize)
  $: pagitems = paginatedItems(searchedPosts, pageSize, currentPage)
  $: currentPage = currentPage>totalPages?totalPages==0?totalPages+1:totalPages:currentPage
</script>
<h1>{title}</h1>

<input type="text" placeholder="search" bind:value={searchTerm}>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<a href="/blog/1stpost">First post</a>
<a href="/blog/moon-sun">Dynamic Parameters</a>

<h1>Posts</h1>

<div class="posts">
  {#if pagitems.length}
    {#each pagitems as item}
      <div class="post">
        <h2>{item.title.substring(0, 20)}</h2>
        <p>{item.body.substring(0, 80)}</p>
        <p class="link"><a href="/blog/{item.id}">Read more</a></p>
      </div>
    {/each}
  {:else}
    <p>No posts found with "{searchTerm}"</p>
  {/if}
</div>
<h1>
  1 ... {currentPage} ... {totalPages}
  <span on:click={beforePage}>before</span>
  <span on:click={nextPage}>next</span>
</h1>

<style>
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .post {
    padding: 10px ;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px #eee;
  }

  h2 {
    margin: 0;
  }

  .link {
    text-align: right;
  }
</style>