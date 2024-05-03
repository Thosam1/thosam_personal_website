export enum CourseType {
	CS = "CS",
	COM = "COM",
	MATH = "MATH",
	PHYS = "PHYS",
	BIO = "BIO",
	CH = "CH",
	MGT = "MGT",
	HUM = "HUM",
}

export interface ICourse {
	name: string,
	code: string,
	link: string,
	credits: number,
	type: CourseType
}
