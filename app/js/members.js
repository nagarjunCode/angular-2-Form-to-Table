System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Member;
    return {
        setters:[],
        execute: function() {
            Member = (function () {
                function Member(name, email, age, phone) {
                    this.name = name;
                    this.email = email;
                    this.age = age;
                    this.phone = phone;
                }
                return Member;
            }());
            exports_1("Member", Member);
        }
    }
});
//# sourceMappingURL=members.js.map