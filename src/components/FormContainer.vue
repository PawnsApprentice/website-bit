<template>
  <div class="mt-10 flex justify-between flex-wrap bg-card p-10">
    <div class="w-5/12">
      <form @submit.prevent="submitForm">
        <div class="flex mb-4">
          <div class="mr-20">
            <label
              for="firstName"
              class="block text-deep-purple font-bold mb-2"
            >
              First Name
              <span class="text-pink font-bold text-xl">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
              required
            />
          </div>
          <div>
            <label for="lastName" class="block text-deep-purple font-bold mb-2">
              Last Name
              <span class="text-pink font-bold text-xl">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
              required
            />
          </div>
        </div>
        <div class="flex mb-4">
          <div class="mr-20">
            <label for="email" class="block text-deep-purple font-bold mb-2">
              Email Address
              <span class="text-pink font-bold text-xl">*</span>
            </label>
            <input
              id="email"
              type="email"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
              required
            />
            <label
              for="additionalLabel1"
              v-if="
                selectedInquiries.includes('Business') ||
                selectedInquiries.includes('Partnership')
              "
              class="block text-deep-purple font-bold mb-2 mt-6"
            >
              Organization
              <span class="text-pink font-bold text-xl">*</span>
            </label>
            <input
              id="Organization"
              v-if="
                selectedInquiries.includes('Business') ||
                selectedInquiries.includes('Partnership')
              "
              type="text"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
              required
            />
          </div>
          <div>
            <label
              for="phoneNumber"
              class="block text-deep-purple font-bold mb-2"
            >
              Phone Number
              <span class="text-pink font-bold text-xl">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
              required
            />
            <label
              for="Organization"
              v-if="
                selectedInquiries.includes('Business') ||
                selectedInquiries.includes('Partnership')
              "
              class="block text-deep-purple font-bold mb-2 mt-6"
            >
              Job Title
              <span class="text-pink font-bold text-xl">*</span>
            </label>
            <input
              id="JobTitle"
              v-if="
                selectedInquiries.includes('Business') ||
                selectedInquiries.includes('Partnership')
              "
              type="text"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
              required
            />
          </div>
        </div>
        <div class="mb-4">
          <label for="subject" class="block text-deep-purple font-bold mb-2">
            Subject
            <span class="text-pink font-bold text-xl">*</span>
          </label>
          <input
            id="subject"
            type="text"
            class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-deep-purple font-bold mb-2">
            Message
            <span class="text-pink font-bold text-xl">*</span>
          </label>
          <textarea
            id="message"
            class="w-full border-b border-gray-300 focus:outline-none focus:border-deep-purple-accent-400"
            rows="5"
            required
          ></textarea>
        </div>

        <div>
          <p v-if="!isFormValid" class="text-red-500">
            Please check the terms and agreement and select the inquiry type.
          </p>
          <button
            type="submit"
            class="bg-deep-purple hover:bg-deep-purple-accent-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <div class="w-5/12">
      <div class="mb-3">
        <label for="inquiryTypes" class="block text-deep-purple font-bold mb-2">
          Inquiry Types
          <span class="text-pink font-bold text-xl">*</span>
        </label>
        <button
          v-for="option in inquiryOptions"
          :key="option"
          :class="[
            'inquiry-option',
            { 'inquiry-option-selected': selectedInquiries.includes(option) },
          ]"
          @click="selectInquiry(option)"
          :required="option === 'General'"
        >
          {{ option }}
        </button>
      </div>
      <div class="flex items-center mb-5">
        <input type="checkbox" id="checkbox1" v-model="checkbox1" />
        <label for="checkbox1" class="ml-2 text-deep-purple font-bold">
          Keep me updated on AgeDB's latest news.
        </label>
      </div>
      <div class="flex items-center">
        <input type="checkbox" id="checkbox2" v-model="checkbox2" />
        <label for="checkbox2" class="ml-2 text-deep-purple font-bold">
          The information you provide will be used in accordance with our
          Privacy Policy.
          <span class="text-pink font-bold text-xl">*</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inquiryOptions = [
  "General",
  "Business",
  "Apache AGE",
  "Pricing",
  "Technical Question",
  "Partnership",
  "Career",
  "Other",
];
const selectedInquiries = ref([]);
const checkbox1 = ref(false);
const checkbox2 = ref(false);

const selectInquiry = (option) => {
  const index = selectedInquiries.value.indexOf(option);
  if (index > -1) {
    selectedInquiries.value.splice(index, 1); // Untoggle if the button is already toggled
  } else {
    selectedInquiries.value.push(option); // Toggle the button
  }
};

const isFormValid = ref(true);

const submitForm = () => {
  if (validateForm()) {
    isFormValid.value = true;
  } else {
    isFormValid.value = false;
  }
};

const validateForm = () => {
  // Validate form fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    email.trim() === "" ||
    phoneNumber.trim() === "" ||
    subject.trim() === "" ||
    message.trim() === ""
  ) {
    return false; // One or more required fields are empty
  }

  if (selectedInquiries.value.length === 0) {
    return false; // No inquiry option is selected
  }

  if (!checkbox2.value) {
    return false; // Checkbox 2 is not checked
  }

  return true; // All validations passed
};
</script>

<style scoped>
input,
textarea {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d1d5db;
  padding: 5px 0;
  transition: background-color 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #8b5cf6;
  background-color: #e8dcf8;
}

input:hover,
textarea:hover {
  background-color: #e8dcf8;
}
.inquiry-option {
  color: #150136;
  border: 1px solid #150136;
  border-radius: 20px;
  padding: 8px 16px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.inquiry-option:hover,
.inquiry-option-selected {
  background-color: #150136;
  color: #ffffff;
}
</style>
