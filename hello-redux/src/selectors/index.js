export const selectCounts = (state) => state.counts;
export const selectCount = (state, i) => selectCounts(state)[i];

export const selectPrenom = (state) => state.prenom;