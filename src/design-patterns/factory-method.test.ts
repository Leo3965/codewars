import { clientCode, ConcreteCreator1, ConcreteCreator2 } from './factory-method'

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
describe('factory method', () => {
    test('should create with ConcreteCreator1', () => {
        clientCode(new ConcreteCreator1())
    })

    test('should create with ConcreteCreator2', () => {
        clientCode(new ConcreteCreator2())
    })
})
