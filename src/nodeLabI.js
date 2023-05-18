import './App.css';
import { Employee } from './nodeLabH';

const Person = Employee;

delete Person.department;
delete Person.startDate;