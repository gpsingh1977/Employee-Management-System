export interface IEMPLOYEES {
	[key: number]: {
		'id': number,
		'firstName': string,
		'lastName': string,
		'employmentType'?: string,
		'gender'?: string,
		'homeAddress'?: string,
		'homePhone'?: string,
		'employeeId': string,
		'department'?: string,
		'designation'?: string,
		'email': string
	}
}

export const EMPLOYEES: IEMPLOYEES = {
    1: {
      id: 1,
      firstName: 'Rahul',
      lastName: 'Dravid',
      employmentType: 'Full-Time',
      gender: 'Male',
      homeAddress: 'Phase 1, Mohali',
      homePhone: '9812345678',
      employeeId: '123',
      department: 'Sales',
      designation: 'Sales Executive',
			email: 'abc@def.com'
    },
  
    2: {
			id: 2,
			firstName: 'Saurav',
			lastName: 'Gangauly',
			employmentType: 'Part-Time',
			gender: 'Male',
			homeAddress: 'Phase 2, Mohali',
			homePhone: '9812345678',
			employeeId: '456',
			department: 'Engineering',
			designation: 'Senior Engineer',
			email: 'abc@def.com'
      },

    3: {
			id: 3,
			firstName: 'Yuvraj',
			lastName: 'Singh',
			employmentType: 'Full-Time',
			gender: 'Female',
			homeAddress: 'Sector 9, Chandigarh',
			homePhone: '9812345678',
			employeeId: '789',
			department: 'Engineering',
			designation: 'Junior Engineer',
			email: 'abc@def.com'
      },

    4: {
			id: 4,
			firstName: 'Sachin',
			lastName: 'Dev',
			employmentType: 'Full-Time',
			gender: 'Male',
			homeAddress: 'Phase 9, Mohali',
			homePhone: '9812345678',
			employeeId: '001',
			department: 'Engineering',
			designation: 'Director',
			email: 'abc@def.com'
      },

		5: {
			id: 5,
			firstName: 'Shubman',
			lastName: 'Gill',
			employmentType: 'Part-Time',
			gender: 'Male',
			homeAddress: 'Phase 10, Mohali',
			homePhone: '9812345678',
			employeeId: '002',
			department: 'Engineering',
			designation: 'Junior Director',
			email: 'abc@def.com'
			},

		6: {
			id: 6,
			firstName: 'Rahul',
			lastName: 'Dravid',
			employmentType: 'Full-Time',
			gender: 'Male',
			homeAddress: 'Phase 1, Mohali',
			homePhone: '9812345678',
			employeeId: '123',
			department: 'Human Resources',
			designation: 'Senior Manager',
			email: 'abc@def.com'
		},
	
		7: {
			id: 7,
			firstName: 'Saurav',
			lastName: 'Gangauly',
			employmentType: 'Part-Time',
			gender: 'Male',
			homeAddress: 'Phase 2, Mohali',
			homePhone: '9812345678',
			employeeId: '456',
			department: 'Engineering',
			designation: 'Senior Engineer',
			email: 'abc@def.com'
			},

		8: {
			id: 8,
			firstName: 'Yuvraj',
			lastName: 'Singh',
			employmentType: 'Full-Time',
			gender: 'Female',
			homeAddress: 'Sector 9, Chandigarh',
			homePhone: '9812345678',
			employeeId: '789',
			department: 'Engineering',
			designation: 'Junior Engineer',
			email: 'abc@def.com'
			},

		9: {
			id: 9,
			firstName: 'Sachin',
			lastName: 'Dev',
			employmentType: 'Full-Time',
			gender: 'Male',
			homeAddress: 'Phase 9, Mohali',
			homePhone: '9812345678',
			employeeId: '001',
			department: 'Engineering',
			designation: 'Director',
			email: 'abc@def.com'
			},

		10: {
			id: 10,
			firstName: 'Shubman',
			lastName: 'Gill',
			employmentType: 'Part-Time',
			gender: 'Male',
			homeAddress: 'Phase 10, Mohali',
			homePhone: '9812345678',
			employeeId: '002',
			department: 'Engineering',
			designation: 'Junior Director',
			email: 'abc@def.com'
			},			      
  };
  