<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      color="" v-for="(instruction, idx) in instructions" :key="'T' + idx"
    >
      <v-card-title>{{ instruction.title }}</v-card-title>
      <v-card-subtitle>{{ instruction.subtitle }}</v-card-subtitle>
      <v-card-text>{{ instruction.text }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  data() {
    return {
      instructions: [
        {
          title: 'Discord',
          subtitle: '',
          text: 'Hello students,\n' +
            '\n' +
            "To assist you on your journey on learning how to program, we've created some additional help for you in the form of a Discord server. Please log in to this server to ask for assistance.\n" +
            '\n' +
            'So if you have questions, feel free to post them on the server. Usually there should be someone online to help out...'
        },
        {
          title: 'How to install the Java Development Kit and IntelliJ IDEA Community Edition',
          subtitle: 'Set up system',
          text: "During the first lecture we will install the required software together, but in case you are\n                wondering we have created a step-by-step guide on how to install the software needed for this course.\n                Head over to https://www.oracle.com/nl/java/technologies/javase-downloads.htmland go download the Java\n                SE 11 (LTS) installer for your specific operating system.\n                You'll need to create an Oracle account and sign in to be able to download the installer.\n                Head over to https://www.jetbrains.com/idea/download and get IntelliJ IDEA Community Edition for your\n                specific operating system.\n                Install the Java SE 11 development kit downloaded from step 1.\n                Unfortunately, there is no \"easy\" way to check whether or not the installation was a success. If the\n                installer exitedwithout errors, you should assume everything is up and running. If your installer\n                crashes, please contact your teacher.\n                Install IntelliJ IDEA Community Edition downloaded from step 2.\n                Download the DemoProject.zip file (below) and extract it to somewhere you can easily find it.\n                Open IntelliJ and select open and select the folder you extracted from the zipfile as discussed in step\n                5.\n                Head over to \"1: Project\" (top left), open up \"Demo1\", open up \"src\" before double-clicking on\n                \"Application\".\n                You might need to wait before IntelliJ has indexed the Java Development Kit. If you see a progressbar in\n                the bottom, wait a moment! Be patient.\n                If everything worked out correctly, you should a green triangle that you can now click to run your\n                program. If you can do so, your installation was succesful!\n                Just to help out, we have created a video that shows all these steps and explains a little about what\n                happens. Have a look at https://youtu.be/8Dp9jP56b4U."
        },
        {
          title: 'Sandbox project',
          subtitle: '',
          text: 'Download the Sandbox project here. A Sandbox project does not contain exercises, but should\n                be considered a playground for you to experiment upon!'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
