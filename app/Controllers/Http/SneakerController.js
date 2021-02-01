'use strict'
const Sneaker = use('App/Models/Sneaker')

class SneakerController {

    async index({view}){
        let allSneakers = await Sneaker.all()
        allSneakers = allSneakers.toJSON()
       
        let viewData = {
            allSneakers
        }
        console.log(viewData)
        return view.render('sneakers/index', viewData)
        
    }
    async create({view}){
        return view.render('sneakers/create')
    }
    async store({request, response}){
        try {
         
        const data = request.post()
        const sneaker = new Sneaker()

        sneaker.title = data.title
        sneaker.image = data.image
        sneaker.description = data.description

        await sneaker.save()
        return response.redirect('/')
        } catch (error) {
            console.log(error)
            return 'Sorry there was an error check console'
        } 
        
    }
    async edit({view, request}){
        const sneaker = await Sneaker.find(request.params.id)
        let viewData = {
            sneaker: sneaker.toJSON()
        }
        return view.render('sneakers/edit', viewData)
    }
    async show({view, request}){
        try {
            const sneaker = await Sneaker.find(request.params.id)
            let viewData = {
                sneaker: sneaker.toJSON()
            }
            return view.render('sneakers/show', viewData)
        } catch (error) {
            return "Sorry you have an error it cant be fixed the world is ending"
        }
    }
    async update({request, response}){
        console.log(request.post())
        const postData = request.post()
        const sneaker = await Sneaker.find(request.params.id)
        console.log(sneaker.toJSON())
        sneaker.title = postData.title
        sneaker.image = postData.image
        sneaker.description = postData.description
        sneaker.save()
        console.log(sneaker.toJSON())
        return response.redirect('back')
    }
    async destroy({request, response}){
        console.log(request.post())
        const postData = request.post()
        const sneaker = await Sneaker.find(request.params.id)
        sneaker.delete()
        return response.redirect('back')
   
    }
}

module.exports = SneakerController
