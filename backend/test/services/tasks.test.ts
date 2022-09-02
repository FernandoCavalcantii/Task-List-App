import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { before, describe, test } from "mocha";
import ErrorObj from "../../src/helpers/ErrorObj";
import TasksModel from '../../src/repository/Tasks.model';
import Service from "../../src/services/tasks.service";
chai.use(chaiAsPromised);

const expect = chai.expect;

describe("Test", async function () {
  let service: Service;

  before(async () => {
    const model = new TasksModel();
    service = new Service(model);
  });

  describe("if service method createTask:", () => {

    test("1- Returns a valid task, when passed right data", async () => {
      const data = {
        name: "Project",
        description: "Test test",
        status: "Done",
        userId: 1
      };
      const result = await service.createTask(data);

      expect(result).is.not.null.true;
    });

    test("2- Throws an error, code 400, message 'Field \"name\" is required', when property name is undefined", async () => {
      const data = {
        name: undefined,
        description: "Test test",
        status: "Done",
        userId: 3
      };

      await expect(service.createTask(data as any))
        .to.eventually.be.rejectedWith('Field "name" is required')
        .and.be.an.instanceOf(ErrorObj)
        .and.have.property('code')
        .eql(400);
    });
  });
});