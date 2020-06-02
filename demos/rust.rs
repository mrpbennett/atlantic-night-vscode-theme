fn recompute_centroids(
    xs: &[Vec<$kind>],
    clustering: &[usize],
    k: usize,
) -> Vec<Vec<$kind>> {
    let ndims = xs[0].len();

    (0..k)
        .map(|cluster_ix| {
            let mut centroid: Vec<$kind> = vec![0.0; ndims];
            let mut n_cluster: $kind = 0.0;
            xs.iter().zip(clustering.iter()).for_each(|(xi, &zi)| {
                if zi == cluster_ix {
                    n_cluster += 1.0;
                    xi.iter().enumerate().for_each(|(j, &x_ij)| {
                        centroid[j] += x_ij;
                    });
                }
            });
            centroid.iter().map(|&c_j| c_j / n_cluster).collect()
        })
        .collect()
}