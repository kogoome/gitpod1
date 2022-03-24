<script context="module"> 
// constext="module" 을 사용하면 이 안에 함수가 먼저 실행

  // http://localhost:3000/blog/moon-sun 입력하면 
  // @ts-ignore  
  export const load = async ({params, fetch, session, stuff}) => {
    console.log("params filename [param1] [param2] are url inputs: ")
    console.log(params) // { param1: 'moon', param2: 'sun' }
    const {param1, param2} = params

    return {
      props: { // 프롭스는 다음 스크립트에서 호출 가능하다.
        param1,
        param2
      }
    }
  }

</script>

<script>
  // 위 함수에서 리턴한 프롭스를 여기에서 공간만들고 받아둔다.
  export let param1
  export let param2
</script>

<h1>Blog post, dynamic params : {param1}, {param2}</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia assumenda officiis fugit accusamus nihil autem. Reiciendis officiis voluptates repellat pariatur similique est perferendis atque obcaecati, placeat labore minus veritatis?</p>