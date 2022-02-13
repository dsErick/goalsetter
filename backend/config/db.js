import colors from 'colors'
import mongoose from 'mongoose'

export default async function connectDB() {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)

        console.log(colors.yellow(`MongoDB connected: ${connection.host}`))
    } catch (err) {
        console.error(err)

        process.exit(1)
    }
}
