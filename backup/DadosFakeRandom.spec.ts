import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('Nova Tarefa', async ({ page }) => {

    await page.goto('http://localhost:3000')

    const inputTaskName = page.locator('#newTask')
    await inputTaskName.fill(faker.lorem.words())

    await page.click('css=button >> text=Creat')

})
