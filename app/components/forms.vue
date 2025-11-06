<script setup>
</script>

<template>
  <div class="flex justify-center">
    <form
      action="https://formspree.io/f/mayvldwp"
      method="POST"
      class="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
      </div>
      <div class="col-span-2">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows="4" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"></textarea>
      </div>
      <div class="col-span-2">
        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
      </div>
    </form>
  </div>
</template>