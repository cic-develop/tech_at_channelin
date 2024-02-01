package channelin_test

import (
	"testing"

	keepertest "channelin/testutil/keeper"
	"channelin/testutil/nullify"
	"channelin/x/channelin/module"
	"channelin/x/channelin/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ChannelinKeeper(t)
	channelin.InitGenesis(ctx, k, genesisState)
	got := channelin.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
