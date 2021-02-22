import * as uuid from 'uuid'

import { TodoItem } from '../models/TodoItem'
import { TodosAccess } from '../dataLayer/todosAccess'

import { APIGatewayProxyEvent } from 'aws-lambda'
import { getUserId } from '../lambda/utils'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'

const todosAsccess = new TodosAccess()

export async function getTodos(
  event: APIGatewayProxyEvent
): Promise<TodoItem[]> {
  const userId = getUserId(event)

  return todosAsccess.getTodos(userId)
}

export async function createTodo(
  newTodo: CreateTodoRequest,
  event: APIGatewayProxyEvent
): Promise<TodoItem> {
  const todoId = uuid.v4()
  const userId = getUserId(event)
  const createdAt = new Date().toISOString()

  return await todosAsccess.createTodo({
    todoId,
    userId,
    createdAt,
    ...newTodo
  })
}

export async function updateTodo(
  todoId: string,
  updatedTodo: UpdateTodoRequest,
  event: APIGatewayProxyEvent
): Promise<any> {
  const userId = getUserId(event)

  await todosAsccess.updateTodo(userId, todoId, updatedTodo)

  return {}
}

export async function deleteTodo(
  todoId: string,
  event: APIGatewayProxyEvent
): Promise<any> {
  const userId = getUserId(event)
  await todosAsccess.deleteTodo(userId, todoId)

  return {}
}
