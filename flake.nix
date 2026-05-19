{
  description = "CardScore — React Native Expo app for card game scoring";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            corepack_22   # gives you the right npm/yarn/pnpm via packageManager field
            watchman       # required by Metro bundler for file watching
            git
          ];

          shellHook = ''
            echo "CardScore dev environment ready"
            echo "  node  $(node --version)"
            echo "  npm   $(npm --version)"
            echo ""
            echo "Run 'npx expo start' to launch the Metro bundler."
          '';
        };
      }
    );
}
