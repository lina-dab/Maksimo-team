export class IndexPage {
    constructor(page) {
        this.page = page;
    }

    async userNameVisible() {
        return await this.page.locator('div[class="v-subheader theme--dark"]').textContent();
    }
    async haveTestB() {
        return await this.page.locator('h3[class="headline red--text"]').textContent();
    }
    async clickFriday() {
        await this.page.locator('div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1)').click();
    }
    async clickprovidertestgreen() {
        await this.page.locator('div[class="v-listgroup v-listgroup--active drawer-days-parent"] div:nth-child(1) a:nth-child(1) div:nth-child(1) i:nth-child(1)').click();
    }
    async clickmaindish() {
        await this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(14) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)').click();
    }

}