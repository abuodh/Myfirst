'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(firstName, lastName) {
        _classCallCheck(this, Person);

        this.firstName = firstName || 'notset';
        this.lastName = lastName || 'notset';
    }

    _createClass(Person, [{
        key: 'getFirsName',
        value: function getFirsName() {
            return this.firstName;
        }
    }, {
        key: 'getLastName',
        value: function getLastName() {
            return this.lastName;
        }
    }]);

    return Person;
}();

;

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(member) {
        _classCallCheck(this, Student);

        return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, member.firstName, member.lastName));
    }

    return Student;
}(Person);

var teacher = function (_Person2) {
    _inherits(teacher, _Person2);

    function teacher(member) {
        _classCallCheck(this, teacher);

        return _possibleConstructorReturn(this, (teacher.__proto__ || Object.getPrototypeOf(teacher)).call(this, member.firstName, member.lastName));
    }

    return teacher;
}(Person);

var HYFClass = function () {
    function HYFClass(members) {
        _classCallCheck(this, HYFClass);

        this.members = members || [];
        var membersIsArray = this.members instanceof Array;
        if (!membersIsArray) {
            throw new Error('Members should be an arrya!');
        };
    }

    _createClass(HYFClass, [{
        key: 'addTeacher',
        value: function addTeacher(member) {
            this.members.push(new teacher(member));
        }
    }, {
        key: 'addStudent',
        value: function addStudent(member) {
            this.members.push(new Student(member));
        }
    }, {
        key: 'getAllteachers',
        value: function getAllteachers() {
            return this.members.filter(function (member) {
                return member instanceof teacher;
            });
        }
    }, {
        key: 'getAllStudent',
        value: function getAllStudent() {
            return this.members.filter(function (member) {
                return member instanceof Student;
            });
        }
    }]);

    return HYFClass;
}();

var JS = new HYFClass([]);
[{ firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher' }, { firstName: 'Ali', lastName: 'Barakat', type: 'student' }, { firstName: 'Abd', lastName: 'Hsn', type: 'student' }, { firstName: 'odai', lastName: 'xxxx', type: 'student' }].forEach(function (member) {
    if (member.type === 'teacher') {
        JS.addTeacher(member);
    } else {
        JS.addStudent(member);
    }
});
console.log('student are ', JS.getAllStudent());
console.log('teacher are ', JS.getAllteachers());