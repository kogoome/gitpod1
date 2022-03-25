<script context="module"> 
  // @ts-ignore  
  export const load = async ({params, fetch}) => {
    const {id} = params
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const post = await res.json()

    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/" + post.userId)
    const user = await userRes.json()

    return {
      props: {
        post,
        user
      }
    }
  }
</script>

<script>
// @ts-nocheck
  export let post
  export let user
</script>

<h1>{post.title}</h1>
<p>{post.body}</p>
<p>- Written by <a href="/blog/authors/{user.id}">{user.name}</a></p>
