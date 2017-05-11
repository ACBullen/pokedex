export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon'
  });
};

export const getSinglePokemon = (id) =>{
  return $.ajax({
    url: `/api/pokemon/${id}`
  });
};
