class Person{
    constructor(firstName , lastName){
        this.firstName = firstName || 'notset';
        this.lastName=lastName ||'notset';
    }
    getFirsName(){
        return this.firstName;

    }
    getLastName(){
        return this.lastName;
    }
};
class Student extends Person {
    constructor(member){
        super (member.firstName, member.lastName)
    }
}
class teacher extends Person {
    constructor(member){
        super (member.firstName, member.lastName)
    }

}
class HYFClass {
    constructor(members) {
        this.members = members || [];
        let membersIsArray = this.members instanceof Array;
        if( !membersIsArray){
            throw new Error ('Members should be an arrya!');
        };
    };
    addTeacher(member){
        this.members.push(new teacher(member))
    }
    addStudent(member){
        this.members.push( new Student(member))
    };
    getAllteachers(){
        return this.members.filter(member => member instanceof teacher)
    }
    getAllStudent(){
        return this.members.filter(member => member instanceof Student);
    };
}
var JS = new HYFClass([]);
[
    {firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher'},
    {firstName: 'Ali', lastName: 'Barakat', type: 'student'},
    {firstName: 'Abd', lastName: 'Hsn', type: 'student'},
    {firstName: 'odai', lastName: 'xxxx', type: 'student'},
].forEach((member)=>{
    if (member.type === 'teacher'){
    JS.addTeacher(member)
} else {
    JS.addStudent(member)
}

})
console.log('student are ', JS.getAllStudent());
console.log('teacher are ', JS.getAllteachers());
