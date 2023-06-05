<template>
  <section class="form-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <h2 class="text-primary text-center">Contact Form</h2>
          <form
            @submit.prevent="submitForm"
            action="https://formspree.io/f/xknalbjg"
            method="POST"
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
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
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
</style>
