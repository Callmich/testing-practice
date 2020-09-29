const ToDoController = require("../../controllers/totdo.controller");
const TodoModel = require("../../model/todo.model")
const httpMocks = require("node-mocks-http")
const newTodo = require("../mock-data/new-todo.json")

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("ToDoController.createToDo", () => {

    beforeEach(() => {
        req.body = newTodo
    })

    it("should have a createTodoFunction", () => {
        expect(typeof ToDoController.createTodo).toBe("function")
    })
    it("should call ToDoModel.create", () => {
        ToDoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo)
    })
    it("should return a 201 response code", () => {
        ToDoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })
    it("should return a json body in response", () => {
        TodoModel.create.mockReturnValue(newTodo)
        ToDoController.createTodo(req, res, next)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })
})