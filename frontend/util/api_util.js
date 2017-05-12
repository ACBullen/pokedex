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

export const createNewPokemon = (params) =>{
  return $.ajax({
    method: 'post',
    url: '/api/pokemon',
    data: params
  });
};
