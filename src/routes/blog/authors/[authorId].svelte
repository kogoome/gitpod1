<script context="module">
  export const load = async ({params, fetch}) => {
    const id = params.authorId

    // const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // const user = await userRes.json()
    // const postRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const allPosts = await postRes.json()

    // refactoring
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`)

    const user = await userRes.json()
    const posts = await user.posts
    
    return {
      props: {
        user,
        posts
      }
    }
  }
</script>

<script>
// @ts-nocheck
  export let user
  export let posts

</script>

<h1>{user.name}</h1>

<p>{JSON.stringify(user.company.catchPhrase)}</p>

<p>email : {user.email}</p>
<p>website : {user.website}</p>

<h3>Posts by this {user.name}</h3>
<ul>
  {#each posts as post}
    <li>
      <a href="/blog/{post.id}">{post.title}</a>
    </li>
  {/each}
</ul>
