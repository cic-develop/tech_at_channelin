package chin_test

import (
	"testing"

	keepertest "chin/testutil/keeper"
	"chin/testutil/nullify"
	"chin/x/chin/module"
	"chin/x/chin/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ChinKeeper(t)
	chin.InitGenesis(ctx, k, genesisState)
	got := chin.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
