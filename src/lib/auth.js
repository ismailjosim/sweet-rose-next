import { mongodbAdapter } from '@better-auth/mongo-adapter'
import { betterAuth } from 'better-auth'
import { MongoClient } from 'mongodb'

const client = new MongoClient(
	'mongodb+srv://ismailjosimwork_db_user:zWNKONGKTkdmrlUX@cluster0.rxhgb5i.mongodb.net',
)
const db = client.db('LearnifyDB')

export const auth = betterAuth({
	database: mongodbAdapter(db, {
		client,
	}),

	emailAndPassword: {
		enabled: true,
	},
	// socialProviders: {
	// 	google: {
	// 		clientId: process.env.GOOGLE_CLIENT_ID,
	// 		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	// 	},
	// },
})
