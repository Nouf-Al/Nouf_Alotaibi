
public abstract class AbstractPokemon implements PokemonInterface {

	
	public Pokemon createPokemon(String name, int health, String type){
//		myPokemons += name + " ";
		return new Pokemon(name, health, type); 
		
	}
	
	public String pokemonInfo(Pokemon pokemon) {
		return "Name: " +pokemon.getName()+", Type: "+ pokemon.getType()+", Health: "+ pokemon.getHealth();
	}
	
}