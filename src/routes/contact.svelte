<script>
// @ts-nocheck
  let name = "kogoome" // 로컬스토리지에 저장하고 받아 옴
  let email = "kogoome@gmail.com"
  let message = ""
  let error = ""

  const submitForm = async ()=>{
    // promise 사용하여 에러 처리
    fetch("/api/contact", {
      method: "POST",
      // js객체를 json으로 인코딩; fetch는 json 사용
      body: JSON.stringify({ name, email })
    }).then(async res=>{
      message = await res.json()
    }).catch(err=>{
      error = err
    })

    // try catch를 사용하여 에러 처리, 과정이 복잡해지고 try를 여러개 쓸 수 있다.
    // try {
    //   const submit = await fetch("/apia/contact", {
    //     method: "POST",
    //     // js객체를 json으로 인코딩; fetch는 json 사용
    //     body: JSON.stringify({ 
    //       name,
    //       email
    //     })
    //   })
    //   message = await submit.json()
    // } catch (err) {
    //   error = err
    // }
  }
  $: console.log("키입력 :", name, email)
</script>


<h1>Contact</h1>

{#if !message && !error}
  <form on:submit|preventDefault={submitForm}>
  <!-- <form action="api/contact" method="post"> 폼데이터로 요청 -->
    <label for="">
      name: <input type="text" name="name" bind:value={name}/>
    </label>
    <label for="">
      email: <input type="text" name="email" bind:value={email}/>
    </label>
    <input type="submit">
  </form>
{:else if message}
  <p>Hi {message.name}, your submission has been received</p>
{:else if error}
  <p>The form submission failed. Contact admin@website.com</p>
{/if}


<style>
  label {
    display: block;
    margin-bottom: 20px;
  }
</style>