import { test, expect } from '@playwright/test'

test('Nova Tarefa', async ({ page, request }) => {

    //Given que eu tenho uma nova tarefa
    const taskName = 'Ler um livro de TypeScrypt'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)
    
    //And que estou na pagina de cadastro
    await page.goto('http://localhost:3000')

    //When faço o cadastro dessa nova tarefa
    const inputTaskName = page.locator('#newTask')
    await inputTaskName.fill(taskName)
    await page.click('css=button >> text=Creat')

    //Then essa tarefa é exibida na lista

    //const target = page.getByTestId('task-item')
    //const target = page.locator('.task-item')
    //const target = page.locator('div[class*=listItem]')
    //const target = page.locator('css=.task-item p >> text=' + taskName)
    const target = page.locator(`css=.task-item p >> text=${taskName}`)
    //await expect(target).toHaveText(taskName)
    await expect(target).toBeVisible()
})