<template>
    <div class="botao">
      <input type="button" value="Salvar">
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
input{
    background-color: #BBF2ED;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: large;
    font-weight: bold;
    transition: transform 0.3s ease;
}

input:hover{
    background-color: #4bf3e5;
    transform: scale(1.1);
    font-size: larger;
}

</style>