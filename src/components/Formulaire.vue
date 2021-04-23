<template>
<div id="formulaire">
    <h1>Listes des formulaires</h1>
    <div id="form">
<FormulaireCateg />
<FormulaireProduit />
<FormulaireMenu />
    </div>
</div>
</template>

<script>
import FormulaireCateg from "@/components/FormulaireCateg.vue";
import FormulaireProduit from "@/components/FormulaireProduit.vue";
import FormulaireMenu from "@/components/FormulaireMenu.vue";
export default {
  data: function() {
    return {

    };
  },
  components :{
FormulaireCateg,
FormulaireProduit,
FormulaireMenu
  }
};
</script>

<style scoped>
#form{
display: flex;
flex-direction: row;
gap:10px;

}
</style>
