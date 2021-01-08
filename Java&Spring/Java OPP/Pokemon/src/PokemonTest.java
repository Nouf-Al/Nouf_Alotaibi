
public class PokemonTest {

	public static void main(String[] args) {
		Pokedex pokedex = new Pokedex();
		Pokemon charmander = pokedex.createPokemon("Charmander",100, "fire");
		Pokemon pikachu = pokedex.createPokemon("Pikachu", 50, "electric");
		
		
		pikachu.attackPokemon(charmander);
		System.out.println(pokedex.pokemonInfo(charmander));
		System.out.println(pokedex.pokemonInfo(pikachu));

	}

}
