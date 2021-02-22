import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { CreateTodoRequest } from '../../requests/CreateTodoRequest'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { createLogger } from '../../utils/logger'

import { createTodo } from '../../businessLogic.ts/todos'
import { TodoItem } from '../../models/TodoItem'

const logger = createLogger('ceating todo')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newTodo: CreateTodoRequest = JSON.parse(event.body)

    logger.info('creating a new todo', newTodo)

    const newTodoItem: TodoItem = await createTodo(newTodo, event)

    return {
      statusCode: 201,
      body: JSON.stringify({
        item: newTodoItem
      })
    }
  }
)

handler.use(
  cors({
    credentials: true
  })
)
