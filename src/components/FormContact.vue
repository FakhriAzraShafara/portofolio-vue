<template>
  <section class="form-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <h2 class="text-light text-center">Email Form</h2>
          <form
            @submit.prevent="submitForm"
            action="https://formspree.io/f/xknalbjg"
            method="POST"
            class="bg-secondary p-4 rounded-4"
          >
            <!-- Form fields -->
            <div class="form-group pb-3">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                v-model="name"
                required
                class="form-control"
              />
            </div>
            <div class="form-group pb-3">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                v-model="email"
                name="_replyto"
                required
                class="form-control"
              />
            </div>
            <div class="form-group pb-3">
              <label for="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                v-model="phone"
                class="form-control"
              />
            </div>
            <div class="form-group pb-3">
              <label for="message">Message:</label>
              <textarea
                id="message"
                rows="4"
                v-model="message"
                name="message"
                required
                class="form-control"
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="button-custom">Submit</button>
            </div>
          </form>
          <div class="text-center mt-5">
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://github.com/FakhriAzraShafara"
                  class="text-light p-4"
                  target="_blank"
                >
                  <i class="bi bi-github" style="font-size: 2.5rem"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fakhri-azra-shafara-8252a7222/"
                  class="text-light p-4"
                  target="_blank"
                >
                  <i class="bi bi-linkedin" style="font-size: 2.5rem"></i>
                </a>
                <a
                  href="https://wa.me/62089690736575"
                  class="text-light p-4"
                  target="_blank"
                >
                  <i class="bi bi-whatsapp" style="font-size: 2.5rem"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const endpoint = "https://formspree.io/f/xknalbjg";
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Message sent successfully!");
          this.resetForm();
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      }
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Phone:", this.phone);
      console.log("Message:", this.message);
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 80px 0;
  margin: 50px;
  color: white;
}

.form-contact {
  margin: 0 auto;
}
.button-custom {
  background-color: #37306b;
  text-align: center;
  color: white;
  border: none;
  border-radius: 10px;
  min-height: 50px;
  min-width: 150px;
  font-weight: 600;
  font-size: 1rem;
}
</style>
