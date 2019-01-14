<template>
  <div class="about">
    <b-alert show>Defalut Alert</b-alert>
    <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
    <b-collapse visible id=collapse1_inner class="mt-2">
      <b-card>Hello!</b-card>
    </b-collapse>
  </div>
</template>
