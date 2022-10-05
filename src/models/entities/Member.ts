export type Profile = {
	picture: string
	class: string
	schoolYear: string
	birthday: number
	sex: number
	relationshipStatus: string
}

export type Member = {
	id: string
	fullName: string
	email: string
	phoneNumber: number
	profile: Profile
	createdAt: number
	updatedAt: number
}
