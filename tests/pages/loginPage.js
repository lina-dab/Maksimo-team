export class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }
    async fillEmail(email) {
        await this.page.fill('input[name="email"]', email);
    }
    async fillPassword(password) {
        await this.page.fill('input[name="password"]', password);
    }
    async clickLogin() {
        await this.page.locator('div[class="v-btn__content"]').click();
    }
    async adminNameVisible() {
        return await this.page.locator('div[class="v-subheader theme--dark"]').textContent();
    }
}