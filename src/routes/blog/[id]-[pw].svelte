<script context="module">
  // http://localhost:3000/blog/1231-aaaa 입력하면
  // @ts-ignore
  export const load = async ({params}) => {
    console.log("params filename [id] [pw] are url inputs: ")
    console.log(params) // { id: '1231', pw: 'aaaa' }
    console.log(params.id) // 1231
    console.log(params.pw) // aaaa
    
    const id = params.id
    const pw = params.pw

    return {
      props: {
        id: id,
        pw: pw
      }
    }
  }
</script>

<h1>Blog post</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia assumenda officiis fugit accusamus nihil autem. Reiciendis officiis voluptates repellat pariatur similique est perferendis atque obcaecati, placeat labore minus veritatis?</p>
