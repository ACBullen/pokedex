class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render :error, status: 422
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def pokemon_params
    params.permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  end
end
