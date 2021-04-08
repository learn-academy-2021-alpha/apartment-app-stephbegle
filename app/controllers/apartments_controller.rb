class ApartmentsController < ApplicationController

    def index
        apartments = Apartment.all
    end

    def create
        apartment = Apartment.create(apt_params)
        (apartment.valid?) ? (render json: apartment) : (render json: apartment.errors, status: :unprocessable_entity)
    end

    private
    def apt_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id, :title, :img)
    end
end
