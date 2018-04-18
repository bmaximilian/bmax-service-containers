import { expect } from 'chai';
import 'mocha';
import { ServiceContainer } from './ServiceContainer';

class MockService {}

describe('ServiceContainer', () => {
    it('Should initialize', () => {
        expect(new ServiceContainer()).to.be.instanceOf(ServiceContainer);
    });

    it('Should add a service', () => {
        const services = new ServiceContainer();

        expect(services.set('mock', MockService)).to.be.undefined;
    });
});
