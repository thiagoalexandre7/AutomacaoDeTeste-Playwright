import { test } from '@playwright/test'
import { taskModel } from './fixtures/task.model'
import { deleteTaskByHelper, postTask } from './support/helpers'
import { TasksPage } from './support/pages/tasks'
import data from './fixtures/tasks.json'

let tasksPage: TasksPage

test.beforeEach(({ page }) => {
    tasksPage = new TasksPage(page)
})

test('Cadastrar uma nova Tarefa', async ({ request }) => {

    const task = data.success as taskModel

    await deleteTaskByHelper(request, task.name)

    await tasksPage.go()
    await tasksPage.create(task)
    await tasksPage.shouldHaveText(task.name)
})

test('Não deve permitir tarefa duplicada', async ({ request }) => {

    const task = data.duplicate as taskModel

    await deleteTaskByHelper(request, task.name)
    await postTask(request, task)

    await tasksPage.go()
    await tasksPage.create(task)
    await tasksPage.alertHaveText('Task already exists!')
})

test('Campo Obrigatorio', async ({ page }) => {

    const task = data.required as taskModel

    await tasksPage.go()
    await tasksPage.create(task)
    await tasksPage.requeridFail('This is a required field')

})

test('Concluir uma tarefa', async ({ request }) => {

    const task = data.update as taskModel

    await deleteTaskByHelper(request, task.name)
    await postTask(request, task)

    await tasksPage.go()
    await tasksPage.toggle(task.name)
    await tasksPage.shouldBeDone(task.name)

})

test('Excluir uma tarefa', async ({ request }) => {

    const task = data.delete as taskModel

    await deleteTaskByHelper(request, task.name)
    await postTask(request, task)

    await tasksPage.go()
    await tasksPage.remove(task.name)
    await tasksPage.shouNotExist(task.name)
})