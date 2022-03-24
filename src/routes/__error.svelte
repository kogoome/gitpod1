<script context="module">
  // @ts-ignore
  export const load = ({error, status}) => {
    return {
      props: {
        error,
        status
      }
    }
  }
</script>
<script>
  export let error
  export let status
</script>

<h1>{error.name} {status}</h1>

에러 테스트
<p>{error.message}</p>
<p>{JSON.stringify(error)}</p>