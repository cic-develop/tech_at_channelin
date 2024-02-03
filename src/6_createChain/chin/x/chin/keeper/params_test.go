package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "chin/testutil/keeper"
	"chin/x/chin/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.ChinKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
