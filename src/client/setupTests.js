
/**
 * @file Tests setup file
 * @author Enrique Tamames Sobrino
 * @module tests/setupTests
 * @version 0.0.1
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
