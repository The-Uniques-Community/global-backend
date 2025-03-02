import Registration from '../model/registrationModel.js'

export const register = async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(201).json(newRegistration);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
